const { useEffect } = require('react')
const StarTheme = (props) => {
  const speed = props.speed

  useEffect(() => {
    class Sky {
      constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.width = window.innerWidth
        this.height = window.innerHeight
      }

      initCanvas() {
        this.canvas.width = this.width
        this.canvas.height = this.height

        this.ctx.fillStyle = '#000000'
        this.ctx.fillRect(0, 0, this.width, this.height)
      }

      generateStars(count) {
        let stars = []

        for (let i = 0; i < count; i++) {
          const radius = Math.random() * 2 + 3

          stars.push({
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            radius: radius,
            originalRadius: radius,
            color: '#fff',
            speed: Math.random() * speed,
            increase: Math.random() * 1 + 5,
            alpha: Math.random()
          })
        }

        this.stars = stars
      }

      drawStars() {
        this.stars.forEach((star) => {
          this.drawStar(star)
        })
      }

      updateStars() {
        let flag = true
        this.stars.forEach((star) => {
          star.x += star.speed
          star.y -= (star.speed * (this.width / 2 - star.x)) / 3000
          star.radius = star.originalRadius * (Math.random() / 5 + 0.3)

          if (star.radius < 0) {
            star.radius += star.increase
            star.alpha = 0.4
          }

          if (star.radius > 4.5) {
            star.alpha = Math.random() * (0.5 - 0.4 + 0.5) + 0.4
          }

          if (star.radius > 3) {
            star.radius -= star.increase
          }

          if (star.x > this.width + 2 * star.radius) {
            star.x = -2 * star.radius
          }
        })
      }

      clearCanvas() {
        this.ctx.fillStyle = '#000'
        this.ctx.fillRect(0, 0, this.width, this.height)
      }

      drawStar(star) {
        this.ctx.save()

        this.ctx.fillStyle = star.color

        this.ctx.beginPath()

        this.ctx.translate(star.x, star.y)
        this.ctx.moveTo(0, 0 - star.radius)

        for (let i = 0; i < 5; i++) {
          this.ctx.rotate((Math.PI / 180) * 36)
          this.ctx.lineTo(0, 0 - star.radius * 0.5)
          this.ctx.rotate((Math.PI / 180) * 36)
          this.ctx.lineTo(0, 0 - star.radius)
          this.ctx.globalAlpha = star.alpha
        }

        this.ctx.fill()
        this.ctx.restore()
      }

      draw() {
        this.clearCanvas()
        this.drawStars()
        this.updateStars()
        window.requestAnimationFrame(() => this.draw())
      }

      run() {
        this.clearCanvas()
        this.initCanvas()
        this.generateStars(400)
        this.draw()
      }
    }

    const sky = new Sky(document.querySelector('#starTheme'))
    sky.run()

    const reloadCanvasOnResize = () => {
      window.location.reload(true)
      if (document.querySelector('#starTheme').width < window.innerWidth) {
        window.location.reload(true)
      }
    }
    window.addEventListener('resize', reloadCanvasOnResize)
  }, [speed])

  return (
    <div>
      <canvas id="starTheme"></canvas>
    </div>
  )
}

export default StarTheme
