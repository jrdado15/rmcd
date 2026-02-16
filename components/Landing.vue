<template>
  <div class="page bg-container">
    <!-- Hero content -->
    <div class="hero-inner">
      <!-- Left: Text content -->
      <div class="hero-text">
        <h1 class="hero-heading animate-heading">
          Comfort &amp; Climate<br />
          <span class="heading-accent">Control</span> you can trust
        </h1>

        <p class="hero-sub animate-sub">
          We provide top-tier air conditioning installation, maintenance, and
          repair services for commercial and residential properties across the
          Philippines.
        </p>

        <div class="hero-actions animate-actions">
          <el-button type="primary" size="large" class="btn-primary-hero max-w-[130px]">
            View projects
          </el-button>
          <el-button type="primary" plain size="large" class="btn-plain-hero">
            Contact us
          </el-button>
        </div>

        <!-- Stats row -->
        <div class="stats-row animate-stats">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
      <!-- Right: Images -->
      <div class="hero-images animate-images">
        <img
          src="@/assets/images/landing-photo.jpg"
          class="img-secondary"
          alt="AC installation"
        />
        <img
          src="@/assets/images/landing-photo1.jpg"
          class="img-primary"
          alt="AC technician"
        />

        <!-- Experience tag -->
        <div class="exp-tag">
          <span class="exp-number">10+</span>
          <span class="exp-label">Years of<br/>Experience</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '500+', label: 'Projects Done' },
  { value: '98%', label: 'Satisfaction' },
  { value: '24/7', label: 'Support' },
]
</script>

<style lang="scss" scoped>

/* ─── Background ─── */
.bg-container {
  background-image: url('~/assets/images/landing-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.72) 0%,
      rgba(0, 10, 30, 0.65) 50%,
      rgba(0, 30, 60, 0.55) 100%
    );
    z-index: 1;
  }

  /* Subtle vignette at bottom */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 220px;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
    z-index: 1;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }
}

/* ─── Floating particles ─── */
.particles {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(64, 158, 255, 0.15);
  animation: floatParticle linear infinite;
}

@for $i from 1 through 8 {
  .particle-#{$i} {
    $size: 40px + ($i * 18px);
    width: $size;
    height: $size;
    left: (($i - 1) * 13%) + 2%;
    top: random(80) + 0%;
    animation-duration: 14s + ($i * 2s);
    animation-delay: -($i * 1.8s);
    opacity: 0.2 + ($i * 0.04);
  }
}

@keyframes floatParticle {
  0%   { transform: translateY(0) scale(1); opacity: 0.15; }
  50%  { transform: translateY(-40px) scale(1.1); opacity: 0.3; }
  100% { transform: translateY(0) scale(1); opacity: 0.15; }
}

/* ─── Hero inner layout ─── */
.hero-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  min-height: 100vh;
  // padding: 100px 60px 60px;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 100px 40px 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 90px 24px 48px;
    gap: 30px;
  }
}

/* ─── Text side ─── */
.hero-text {
  flex: 1;
  max-width: 560px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    .hero-actions {
      margin-top: 100px !important;
    }
  }
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(64, 158, 255, 0.15);
  border: 1px solid rgba(64, 158, 255, 0.35);
  color: #7ec8ff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 20px;
  width: fit-content;
  backdrop-filter: blur(6px);
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #409eff;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.5); opacity: 0.6; }
}

.hero-heading {
  font-size: clamp(36px, 5vw, 62px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: clamp(30px, 8vw, 44px);
  }
}

.heading-accent {
  background: linear-gradient(90deg, #409eff, #74c0fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
  max-width: 480px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    br { display: none; }
  }
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  :deep(.btn-primary-hero) {
    height: 48px;
    padding: 0 28px;
    font-weight: 600;
    font-size: 15px;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(64, 158, 255, 0.45) !important;
    }
  }

  :deep(.btn-plain-hero) {
    height: 48px;
    padding: 0 28px;
    font-weight: 600;
    font-size: 15px;
    border-radius: 8px;
    border-color: rgba(255,255,255,0.4) !important;
    color: white !important;
    background: rgba(255,255,255,0.08) !important;
    backdrop-filter: blur(6px);
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease !important;

    &:hover {
      transform: translateY(-2px);
      background: rgba(255,255,255,0.16) !important;
      border-color: rgba(255,255,255,0.7) !important;
    }
  }
}

/* ─── Stats ─── */
.stats-row {
  display: flex;
  gap: 32px;
  padding-top: 8px;

  @media (max-width: 480px) {
    gap: 20px;
  }
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 1px;
    background: rgba(255,255,255,0.2);
  }
}

.stat-value {
  font-size: 26px;
  font-weight: 800;
  color: white;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 22px;
  }
}

.stat-label {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ─── Images side ─── */
.hero-images {
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
}

.img-secondary {
  height: 200px;
  width: 160px;
  object-fit: cover;
  border-radius: 12px;
  align-self: flex-end;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  border: 2px solid rgba(255,255,255,0.1);

  @media (max-width: 768px) {
    height: 160px;
    width: 130px;
  }

  @media (max-width: 480px) {
    display: none;
  }
}

.img-primary {
  height: 420px;
  width: 300px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.55);
  border: 2px solid rgba(255,255,255,0.1);

  @media (max-width: 1024px) {
    height: 360px;
    width: 260px;
  }

  @media (max-width: 768px) {
    height: 300px;
    width: 220px;
  }

  @media (max-width: 480px) {
    display: none;
  }
}


@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

.exp-tag {
  position: absolute;
  bottom: 24px;
  left: -20px;
  background: linear-gradient(135deg, #409eff, #1a6fc4);
  border-radius: 14px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 12px 32px rgba(64, 158, 255, 0.45);
  animation: floatBadge 3.5s ease-in-out 0.5s infinite;
  z-index: 3;

  @media (max-width: 480px) {
    display: none;
  }
}

.exp-number {
  font-size: 28px;
  font-weight: 900;
  color: white;
  line-height: 1;
}

.exp-label {
  font-size: 11px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  line-height: 1.4;
}

/* ─── Entrance Animations ─── */
.animate-badge {
  animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
}
.animate-heading {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.22s both;
}
.animate-sub {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.34s both;
}
.animate-actions {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.46s both;
}
.animate-stats {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.58s both;
}
.animate-images {
  animation: fadeInScale 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: translateX(30px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>