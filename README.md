#  使用tracking.js/陀螺仪 + three.js 实现裸眼3d效果
### 体验地址：[https://threejs-3d.vercel.app/](https://threejs-3d.vercel.app/)
### github地址：[https://github.com/lqq-code/threejs-3d](https://github.com/lqq-code/threejs-3d)
## three.js

- 是一款webGL框架

- 以简单、直观的方式封装了3D图形编程中常用的对象

- 是一个跨浏览器的脚本，使用JavaScript函数库或API来在网页浏览器中创建和展示动画的三维计算机图形。

  

### 1、创建场景

三要素：场景 + 相机 + 渲染器

**构造函数**

1. PerspectiveCamera(fov, aspect, near, far) - 透视摄像机
2. Fov – 在显示器上看到的场景的范围，它的值是角度单位
3. Aspect – 物体的宽除以它的高的值，比如电影图像比例
4. Near – 近截面
5. Far – 远截面

![在这里插入图片描述](https://img-blog.csdnimg.cn/2fc869a70eb240e8ae0bc8f53b8bdff6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0916141fbd544962bef2e7ad21964933.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

> 照相机类型：正投影相机`OrthographicCamera` 和 透视投影相机`PerspectiveCamera`
> 透视投影相机模式一般用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式
> 
![在这里插入图片描述](https://img-blog.csdnimg.cn/d251370a14154b41a9527a0b894bd2a9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_18,color_FFFFFF,t_70,g_se,x_16#pic_center)
### 2、渲染器
![在这里插入图片描述](https://img-blog.csdnimg.cn/04ce3aafce9e4968ad1ebe137b60eecd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
### 3、添加正方体
![在这里插入图片描述](https://img-blog.csdnimg.cn/b629a2f0bc8f4763adc7fa6f34055f9d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
> 之所以要移动相机，是因为默认情况下，任何物体和相机的坐标都是(0,0,0)点。那也就是说，我们的相机和物体(网格)位置重合了，我们的相机在物体的里面。
> 而默认情况下，材质使用单面渲染。当相机在物体里面时，你可能什么都看不到，我们移动相机是为了将相机移出物体内部。

![在这里插入图片描述](https://img-blog.csdnimg.cn/f2c8370e7a4f43e3882000789bdce047.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_19,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 4、设置灯光
![在这里插入图片描述](https://img-blog.csdnimg.cn/1e3a7077605e483587505e239cc4b657.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
### 5、让正方体转动起来
![在这里插入图片描述](https://img-blog.csdnimg.cn/04a461650a694b3caba111c9e6e5001c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
> requestAnimationFrame它是浏览器自带的一个函数，跟three.js没有关系。他的用法和setTimeout非常类似，都是过几秒去执行回调函数。
> setTimeout可以自己设定间隔的时间，而requestAnimationFrame是1/60的时间间隔去执行。当页面被切换requestAnimationFrame会被暂停调用，以节省性能和电量的消耗。


## 通过陀螺仪实现3d效果

> W3C标准API`DeviceOrientation`，用于检测移动设备的旋转方向和加速度。
> 在`IOS`设备上，这个API需要主动申请用户权限。
> 
![在这里插入图片描述](https://img-blog.csdnimg.cn/f491b776a7d94537978b86ad8f9657f6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6b5e5b4091d84286bc7302fed93b4409.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/ab06f6284aff4e5f996d75c1718151ed.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_13,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/5f2527544fab49879df353c18a468b88.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

> Tips:
> 1）`requestPermission`必须由用户主动发起，也就是必须在用户的行为事件里触发，比如click、touchend。
> 2）这个API的调用，必须在`HTTPS`协议访问的网页里使用。

## 通过人脸识别实现3d效果


### tracking.js

- 一个独立的 JavaScript 库，主要实现了颜色和人（人脸、五官等）的跟踪检测。
- 可以通过检测到某特定颜色，或者检测一个人体/脸的出现与移动，来触发 JavaScript 事件，然后对人脸进行采集。



### 1、追踪器：对象追踪器

- face
- eye
- mouth

**引入训练分类器**

```javascript
<script src="tracking.js/build/data/face.js"></script>
<script src="tracking.js/build/data/eye.js"></script>
<script src="tracking.js/build/data/mouth.js"></script>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b61d2a17aebf4dbfab596e6667581383.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)


## 部署：Vercel

- Github授权给vercel后，可以达到最优雅的发布体验，只需将代码轻轻一推，项目就自动更新部署了。

![在这里插入图片描述](https://img-blog.csdnimg.cn/271d9a56f4004b07b44945dd0e7adf5e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/fe642853a27840458025d51b1c2d7baa.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/10a788d7cdf242938b05befda05cecfc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5qSw5Y2k5bel56iL5biI,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
