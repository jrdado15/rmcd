<template>
  <div>
    <!-- Navbar -->
    <div
      class="navbar w-full flex justify-between p-2 md:pr-10 md:pl-10 items-center fixed top-0 left-0 right-0 z-30 transition-all duration-300"
      :class="isScrolled ? 'bg-[#f6fbff] border-b shadow-sm' : 'bg-transparent'"
    >

      <!-- Left section - Logo -->
      <div class="flex gap-1 items-center min-w-[50px] md:min-w-[250px]">
        <img class="w-[60px] h-[60px] mt-[8px] logo-img" src="@/assets/images/logo.png" />
        <div class="text-sm !leading-none company-text">
          <p
            class="font-extrabold text-3xl tracking-widest transition-all duration-300"
            :class="isScrolled ? 'heading-accent' : 'text-white'"
          >
            RMCD
          </p>
          <p
            class="text-xs font-semibold tracking-wider hidden md:block transition-all duration-300"
            :class="isScrolled ? 'text-secondary' : 'text-white/70'"
          >
            Airconditioning System Services
          </p>
        </div>
      </div>

      <!-- Center section - Desktop Menu -->
      <div class="flex-1 flex justify-center">
        <div class="button-menu hidden md:flex">
          <el-button
            v-for="(item, index) in menuItems"
            :key="item.key"
            type="text"
            :class="{ active: selectedKey === item.key }"
            :style="{
              animationDelay: `${index * 0.08}s`,
              color: isScrolled ? '' : 'white'
            }"
            class="menu-item"
            @click="selectMenu(item.key)"
          >
            {{ item.label }}
          </el-button>
        </div>
      </div>

      <!-- Right section - Quote button + Hamburger -->
      <div class="flex items-center gap-3 min-w-[50px] md:min-w-[120px] justify-end">
        <div class="hidden md:block">
          <el-button
            type="primary"
            class="quote-btn"
            size="large"
            :class="{ 'quote-btn-transparent': !isScrolled }"
          >
            Get a quote
          </el-button>
        </div>

        <!-- Hamburger button -->
        <button
          class="hamburger-btn md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md focus:outline-none"
          :class="{ open: sidebarOpen }"
          @click="toggleSidebar"
          aria-label="Toggle menu"
        >
          <span class="bar bar-1" :class="!isScrolled && !sidebarOpen ? '!bg-white' : ''"></span>
          <span class="bar bar-2" :class="!isScrolled && !sidebarOpen ? '!bg-white' : ''"></span>
          <span class="bar bar-3" :class="!isScrolled && !sidebarOpen ? '!bg-white' : ''"></span>
        </button>
      </div>
    </div>

    <!-- Overlay -->
    <Transition name="fade-overlay">
      <div
        v-if="sidebarOpen"
        class="sidebar-overlay fixed inset-0 bg-black/40 z-40 md:hidden"
        @click="closeSidebar"
      />
    </Transition>

    <!-- Mobile Sidebar -->
    <Transition name="slide-sidebar">
      <div
        v-if="sidebarOpen"
        class="sidebar fixed top-0 left-0 h-full w-[280px] bg-[#f6fbff] z-50 shadow-2xl flex flex-col md:hidden"
      >
        <!-- Sidebar Header -->
        <div class="sidebar-header flex items-center justify-between px-5 py-4 border-b">
          <div class="flex items-center gap-2">
            <img class="w-[40px] h-[40px]" src="@/assets/images/logo.png" />
            <div class="leading-none">
              <p class="font-extrabold text-lg tracking-wider heading-accent">RMCD</p>
              <p class="text-[10px] text-secondary font-semibold tracking-wide">Airconditioning System Services</p>
            </div>
          </div>
          <button
            class="close-btn w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            @click="closeSidebar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="#606266" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <!-- Sidebar Menu -->
        <el-menu
          :default-active="selectedKey"
          class="sidebar-el-menu flex-1 border-none bg-transparent"
          @select="handleMenuSelect"
        >
          <el-menu-item
            v-for="(item, index) in menuItems"
            :key="item.key"
            :index="item.key"
            class="sidebar-menu-item"
            :style="{ animationDelay: `${index * 0.07 + 0.1}s` }"
          >
            <template #title>
              <span class="menu-label">{{ item.label }}</span>
            </template>
          </el-menu-item>
        </el-menu>

        <!-- Sidebar Footer -->
        <div class="sidebar-footer px-5 py-6 border-t">
          <el-button type="primary" class="w-full quote-btn-sidebar" @click="closeSidebar">
            Get a quote
          </el-button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const selectedKey = ref('home')
const sidebarOpen = ref(false)
const isScrolled = ref(false)

const menuItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'projects', label: 'Projects' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const selectMenu = (key: string) => {
  selectedKey.value = key
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

const handleMenuSelect = (key: string) => {
  selectedKey.value = key
  closeSidebar()
}
</script>

<style lang="scss" scoped>

.heading-accent {
  background: linear-gradient(90deg, #409eff, #74c0fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Navbar enter animation ─── */
.navbar {
  animation: navbarSlideDown 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes navbarSlideDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── Logo pop on load ─── */
.logo-img {
  animation: logoPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
}

@keyframes logoPop {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ─── Company text fade in ─── */
.company-text {
  animation: fadeInLeft 0.5s ease 0.45s both;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ─── Desktop menu ─── */
.button-menu {
  gap: 40px;

  .menu-item {
    animation: fadeInDown 0.5s ease both;
    position: relative;

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  :deep(.el-button) {
    transition: color 0.25s ease !important;
    position: relative;
    overflow: visible;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0;
      height: 2px;
      background: currentColor;
      border-radius: 2px;
      transform: translateX(-50%);
      transition: width 0.28s cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:hover {
      background: transparent !important;

      &::after {
        width: 100%;
      }
    }

    &.active {
      font-weight: 700 !important;

      &::after {
        width: 100%;
      }
    }
  }
}

/* ─── Quote button ─── */
.quote-btn {
  animation: fadeInRight 0.5s ease 0.4s both;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(64, 158, 255, 0.35) !important;
  }

  &:active {
    transform: translateY(0);
  }

  /* Ghost/outline style when navbar is transparent */
  &.quote-btn-transparent {
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: rgba(255, 255, 255, 0.6) !important;
    color: white !important;
    backdrop-filter: blur(6px);

    &:hover {
      background: rgba(255, 255, 255, 0.25) !important;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15) !important;
    }
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ─── Hamburger ─── */
.hamburger-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .bar {
    display: block;
    width: 22px;
    height: 2px;
    background: #606266;
    border-radius: 2px;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                opacity 0.25s ease,
                background-color 0.3s ease;
    transform-origin: center;
  }

  &.open {
    .bar-1 {
      transform: translateY(7px) rotate(45deg);
    }
    .bar-2 {
      opacity: 0;
      transform: scaleX(0);
    }
    .bar-3 {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
}

/* ─── Overlay transition ─── */
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.3s ease;
}
.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}

/* ─── Sidebar slide transition ─── */
.slide-sidebar-enter-active {
  transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}
.slide-sidebar-leave-active {
  transition: transform 0.32s cubic-bezier(0.55, 0, 1, 0.45), opacity 0.28s ease;
}
.slide-sidebar-enter-from,
.slide-sidebar-leave-to {
  transform: translateX(-100%);
  opacity: 0.6;
}

/* ─── Sidebar ─── */
.sidebar {
  .sidebar-header {
    background: #f6fbff;
  }

  .sidebar-el-menu {
    padding: 8px 0;

    :deep(.el-menu-item) {
      height: 52px;
      line-height: 52px;
      margin: 2px 12px;
      border-radius: 8px;
      padding: 0 16px !important;
      color: #606266;
      font-size: 15px;
      font-weight: 500;
      transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
      animation: sidebarItemIn 0.4s ease both;

      @keyframes sidebarItemIn {
        from {
          opacity: 0;
          transform: translateX(-16px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      &:hover {
        background: rgba(64, 158, 255, 0.08) !important;
        color: #1a1a1a !important;
        transform: translateX(4px);
      }

      &.is-active {
        background: rgba(64, 158, 255, 0.12) !important;
        color: #409eff !important;
        font-weight: 700;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 60%;
          background: #409eff;
          border-radius: 0 2px 2px 0;
        }
      }
    }
  }

  .sidebar-footer {
    .quote-btn-sidebar {
      width: 100%;
      height: 44px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 8px;
      transition: transform 0.2s ease, box-shadow 0.2s ease !important;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(64, 158, 255, 0.4) !important;
      }
    }
  }
}

.close-btn {
  cursor: pointer;
  background: none;
  border: none;
}
</style>