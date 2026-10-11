# rtf-portfolio

A 3D personal portfolio built with React Three Fiber, animating a GLTF model in the browser.

## About

A personal portfolio site that renders an interactive 3D scene (a floating laptop model) instead of a flat page, built in 2023.

## Features

- 3D scene rendering with React Three Fiber and drei
- GLTF model animation using react-spring and GSAP
- Custom loading screen for asset loading progress

## Tech stack

- React 18, Create React App (react-scripts)
- @react-three/fiber, @react-three/drei, three.js
- @react-spring/three, @react-spring/web
- GSAP

## Project structure

```
src/
  App.js            # scene setup
  LoadingScreen.js  # asset loading UI
  Models/           # GLTF model wrapper
public/
  model.gltf, mac-draco.glb, environmentMaps/
```

## Getting started

```bash
git clone https://github.com/tolgazorlu/rtf-portfolio
cd rtf-portfolio
npm install
npm start
```

## Status

Active personal portfolio project.

Live: https://tolgazorlu-threejs.vercel.app

## Related projects

- https://github.com/tolgazorlu/tolgazorlu-portfolio
- https://github.com/tolgazorlu/tolgdev

## License

MIT
