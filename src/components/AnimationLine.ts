const animateLine = (lineRef: any) => {
    const length = lineRef.current.getTotalLength();
  
    // 设置初始样式
    gsap.set(lineRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
  
    // 创建动画
    gsap.to(lineRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      onUpdate: function() {
        const progress = this.progress();
        const color = gsap.utils.interpolate("#blue", "white", progress);
        gsap.set(lineRef.current, { stroke: color });
      }
    });
  };

  export default animateLine