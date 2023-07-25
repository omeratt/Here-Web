import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {};

function cube() {
  "use strict";
  class Point2 {
    public x;
    public y;
    constructor(x: any, y: any) {
      this.x = typeof x === "number" ? x : 0;
      this.y = typeof y === "number" ? y : 0;
    }
  }

  class Point3 extends Point2 {
    public z;
    constructor(x: any, y: any, z: any) {
      super(x, y);
      this.z = typeof z === "number" ? z : 0;
    }
  }

  class Cube {
    public vertices;
    public faces;
    constructor(center: any, size: any) {
      const d = size / 2;

      this.vertices = [
        new Point3(center.x - d, center.y - d, center.z + d),
        new Point3(center.x - d, center.y - d, center.z - d),
        new Point3(center.x + d, center.y - d, center.z - d),
        new Point3(center.x + d, center.y - d, center.z + d),
        new Point3(center.x + d, center.y + d, center.z + d),
        new Point3(center.x + d, center.y + d, center.z - d),
        new Point3(center.x - d, center.y + d, center.z - d),
        new Point3(center.x - d, center.y + d, center.z + d),
      ];

      this.faces = [
        [
          this.vertices[0],
          this.vertices[1],
          this.vertices[2],
          this.vertices[3],
        ],
        [
          this.vertices[3],
          this.vertices[2],
          this.vertices[5],
          this.vertices[4],
        ],
        [
          this.vertices[4],
          this.vertices[5],
          this.vertices[6],
          this.vertices[7],
        ],
        [
          this.vertices[7],
          this.vertices[6],
          this.vertices[1],
          this.vertices[0],
        ],
        [
          this.vertices[7],
          this.vertices[0],
          this.vertices[3],
          this.vertices[4],
        ],
        [
          this.vertices[1],
          this.vertices[6],
          this.vertices[5],
          this.vertices[2],
        ],
      ];
    }

    render(container: any, dx: any, dy: any) {
      container.innerHTML = "";

      for (let i = 0, ii = this.faces.length; i < ii; i++) {
        let face = this.faces[i];
        let point = Project(face[0]);
        var str = `<path d="M${point.x + dx} ${-point.y + dy}`;
        for (let o = 1, oo = face.length; o < oo; o++) {
          point = Project(face[o]);
          str += ` L ${point.x + dx} ${-point.y + dy}`;
        }
        str += ` Z" fill="rgb(36, 36, 36,0.2)" stroke="#E5FF00">`;
        container.innerHTML += str;
      }
    }
  }

  const Project = (vertice: any) => new Point2(vertice.x, vertice.z);

  const Rotate = (vertice: any, center: any, theta: any, phi: any) => {
    var ct = Math.cos(theta),
      st = Math.sin(theta),
      cp = Math.cos(phi),
      sp = Math.sin(phi),
      x = vertice.x - center.x,
      y = vertice.y - center.y,
      z = vertice.z - center.z;

    vertice.x = ct * x - st * cp * y + st * sp * z + center.x;
    vertice.y = st * x + ct * cp * y - ct * sp * z + center.y;
    vertice.z = sp * y + cp * z + center.z;
  };

  const container = document.querySelector<HTMLCanvasElement>("svg");
  const width = container?.clientWidth || 0;
  const height = container?.clientHeight || 0;
  const dx = width / 2;
  const dy = height / 2;
  const center = new Point3(0, dy, 0);
  const cube = new Cube(center, dy);
  const mouse = {
    down: false,
    x: 0,
    y: 0,
  };

  const Tick = () => {
    for (var i = 0, ii = 8; i < ii; i++) {
      Rotate(cube?.vertices[i], center, Math.PI / 270, Math.PI / 450);
    }

    cube.render(container, dx, dy);

    !mouse.down ? requestAnimationFrame(Tick) : null;
  };

  cube.render(container, dx, dy);

  container?.addEventListener("mousedown", (e) => {
    mouse.down = true;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  container?.addEventListener("mousemove", (e) => {
    if (mouse.down) {
      var theta = ((e.clientX - mouse.x) * Math.PI) / 360;
      var phi = ((e.clientY - mouse.y) * Math.PI) / 180;

      for (var i = 0, ii = 8; i < ii; i++) {
        Rotate(cube?.vertices[i], center, theta, phi);
      }

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      cube.render(container, dx, dy);
    }
  });
  container?.addEventListener("mouseup", (_) => {
    setTimeout(() => {
      mouse.down = false;
      requestAnimationFrame(Tick);
    }, 200);
  });

  requestAnimationFrame(Tick);
}
export default function Cube({}: Props) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      cube();
    }, 2);
    const container = document.querySelector(".myCubeContainer");
    if (!container) return;
    setHeight(container.clientHeight);
    setWidth(container.clientWidth);
    const handleWindowResize = () => {
      timer = setTimeout(() => {
        cube();
      }, 2);
      setHeight(container.clientHeight);
      setWidth(container.clientWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div className="myCubeContainer flex  h-full w-full flex-1 items-center justify-center overflow-visible">
      <motion.svg
        initial={{ scale: 0, opacity: 0, rotate: "150deg" }}
        transition={{ duration: 1.2 }}
        whileInView={{ scale: 1, opacity: 1, rotate: "0deg" }}
        // view-box={`0 0 ${width * 0.85} ${width * 0.85}`}
        width={width}
        height={Math.min(width, height * 0.7)}
        className="overflow-visible"
      ></motion.svg>
    </motion.div>
  );
}
