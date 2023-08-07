# Creating Stereoscopic 3D Effect with tracking.js Gyroscope and three.js

### Demo: [https://threejs-3d.vercel.app/](https://threejs-3d.vercel.app/)
### GitHub Repository: [https://github.com/lqq-code/threejs-3d](https://github.com/lqq-code/threejs-3d)

## Introduction to three.js

- three.js is a webGL framework.
  
- It simplifies 3D graphics programming by providing an intuitive way to work with common 3D objects.
  
- It's a cross-browser scripting library or API that allows creating and showcasing animated 3D computer graphics within a web browser using JavaScript.

Please note that while I've provided a translation, the formatting options for rich text are limited in this context.
  

### 1. Creating the Scene

Three essential components: Scene + Camera + Renderer

**Constructor Parameters**

1. PerspectiveCamera(fov, aspect, near, far) - Perspective camera
2. Fov – The extent of the scene visible on the display, measured in degrees.
3. Aspect – The ratio of the object's width to its height, e.g., aspect ratio of a movie frame.
4. Near – Near clipping plane.
5. Far – Far clipping plane.

![Image](https://img-blog.csdnimg.cn/2fc869a70eb240e8ae0bc8f53b8bdff6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![Image](https://img-blog.csdnimg.cn/0916141fbd544962bef2e7ad21964933.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

> Types of cameras: OrthographicCamera and PerspectiveCamera
> Perspective camera mode is commonly used to simulate what the human eye sees and is the most common projection mode in 3D scene rendering.
>
![Image](https://img-blog.csdnimg.cn/d251370a14154b41a9527a0b894bd2a9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_18,color_FFFFFF,t_70,g_se,x_16#pic_center)
### 2. Renderer
![Image](https://img-blog.csdnimg.cn/04ce3aafce9e4968ad1ebe137b60eecd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 3. Adding a Cube
![Image](https://img-blog.csdnimg.cn/b629a2f0bc8f4763adc7fa6f34055f9d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

> The reason we need to move the camera is that by default, both the camera and object (mesh) have the coordinates (0,0,0). This means that our camera is located inside the object. When the camera is inside an object, you might not see anything, as materials are set to render only one side by default. Moving the camera is done to bring it outside of the object.
>
![Image](https://img-blog.csdnimg.cn/f2c8370e7a4f43e3882000789bdce047.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 4. Setting up Lights
![Image](https://img-blog.csdnimg.cn/1e3a7077605e483587505e239cc4b657.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 5. Making the Cube Rotate
![Image](https://img-blog.csdnimg.cn/04a461650a694b3caba111c9e6e5001c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

> `requestAnimationFrame` is a built-in browser function and is not specific to three.js. It functions similarly to `setTimeout`, both being used to execute a callback function after a certain period of time.
> The difference is that `setTimeout` allows you to specify a custom interval, whereas `requestAnimationFrame` operates at approximately 1/60 second intervals. When the page is switched, `requestAnimationFrame` is paused to save on performance and battery consumption.


## Achieving 3D Effects Using Gyroscope

The W3C standard API `DeviceOrientation` is used to detect the rotational orientation and acceleration of mobile devices. On iOS devices, this API requires users to grant explicit permission.

![Image 1](https://img-blog.csdnimg.cn/f491b776a7d94537978b86ad8f9657f6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![Image 2](https://img-blog.csdnimg.cn/6b5e5b4091d84286bc7302fed93b4409.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![Image 3](https://img-blog.csdnimg.cn/ab06f6284aff4e5f996d75c1718151ed.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![Image 4](https://img-blog.csdnimg.cn/5f2527544fab49879df353c18a468b88.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

**Tips:**
1. The `requestPermission` must be initiated by the user and triggered within a user interaction event, such as a click or touchend.
2. The usage of this API is restricted to web pages accessed through the HTTPS protocol.

## Implementing 3D Effects through Facial Recognition

### tracking.js

- A standalone JavaScript library that primarily enables tracking and detection of colors and individuals (faces, facial features, etc.).
- It can trigger JavaScript events based on detecting specific colors or the presence and movement of a person (body/face), enabling the capture of facial data.

### 1. Trackers: Object Trackers

- face
- eye
- mouth

**Introducing Classifier Training**

```javascript
<script src="tracking.js/build/data/face.js"></script>
<script src="tracking.js/build/data/eye.js"></script>
<script src="tracking.js/build/data/mouth.js"></script>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b61d2a17aebf4dbfab596e6667581383.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


## Deployment: Vercel

By authorizing Vercel with your GitHub account, you can achieve an incredibly elegant deployment experience. With just a gentle push of your code, your project will be automatically updated and deployed.

![Image Description](https://img-blog.csdnimg.cn/271d9a56f4004b07b44945dd0e7adf5e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![Image Description](https://img-blog.csdnimg.cn/fe642853a27840458025d51b1c2d7baa.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![Image Description](https://img-blog.csdnimg.cn/10a788d7cdf242938b05befda05cecfc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
