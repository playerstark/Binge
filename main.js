// Binge Social Media Platform - Main JavaScript File

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTypewriter();
    initializeParticleBackground();
    initializeCircularMenu();
    initializeDiversityGauge();
    initializeAnimations();
    initializeNavigation();
});

// Typewriter animation for hero text
function initializeTypewriter() {
    if (document.getElementById('hero-text')) {
        const typed = new Typed('#hero-text', {
            strings: [
                'Welcome to Binge',
                'Where Diversity Matters',
                'Break the Echo Chamber',
                'Earn While You Engage'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Particle background effect using Pixi.js
function initializeParticleBackground() {
    if (document.getElementById('particle-container')) {
        const app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x0a0a0a,
            transparent: true,
            antialias: true
        });
        
        document.getElementById('particle-container').appendChild(app.view);
        
        const particles = [];
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = new PIXI.Graphics();
            particle.beginFill(0x4a1a6d, 0.6);
            particle.drawCircle(0, 0, Math.random() * 3 + 1);
            particle.endFill();
            
            particle.x = Math.random() * app.screen.width;
            particle.y = Math.random() * app.screen.height;
            particle.vx = (Math.random() - 0.5) * 0.5;
            particle.vy = (Math.random() - 0.5) * 0.5;
            
            app.stage.addChild(particle);
            particles.push(particle);
        }
        
        app.ticker.add(() => {
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                if (particle.x < 0) particle.x = app.screen.width;
                if (particle.x > app.screen.width) particle.x = 0;
                if (particle.y < 0) particle.y = app.screen.height;
                if (particle.y > app.screen.height) particle.y = 0;
            });
        });
        
        // Resize handler
        window.addEventListener('resize', () => {
            app.renderer.resize(window.innerWidth, window.innerHeight);
        });
    }
}

// Circular menu functionality
function initializeCircularMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    const diversityGauge = document.getElementById('diversity-gauge');
    
    if (menuItems.length > 0) {
        menuItems.forEach((item, index) => {
            // Position items in semi-circle
            const angle = (index * 45) - 90; // Spread over 180 degrees
            const radius = 120;
            const radian = (angle * Math.PI) / 180;
            
            item.style.transform = `translate(${Math.cos(radian) * radius}px, ${Math.sin(radian) * radius}px)`;
            
            // Add hover effects
            item.addEventListener('mouseenter', () => {
                anime({
                    targets: item,
                    scale: 1.1,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            
            item.addEventListener('mouseleave', () => {
                anime({
                    targets: item,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            
            // Click handlers
            item.addEventListener('click', () => {
                const page = item.getAttribute('data-page');
                if (page) {
                    navigateToPage(page);
                }
            });
        });
    }
}

// Diversity score gauge using ECharts
function initializeDiversityGauge() {
    const gaugeElement = document.getElementById('diversity-gauge');
    if (gaugeElement) {
        const chart = echarts.init(gaugeElement);
        
        const option = {
            backgroundColor: 'transparent',
            series: [{
                name: 'Diversity Score',
                type: 'gauge',
                radius: '80%',
                center: ['50%', '60%'],
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                splitNumber: 10,
                itemStyle: {
                    color: '#6b46c1'
                },
                progress: {
                    show: true,
                    width: 18
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: 18,
                        color: [[1, '#2a0a3d']]
                    }
                },
                axisTick: {
                    distance: -30,
                    splitNumber: 5,
                    lineStyle: {
                        width: 2,
                        color: '#4a1a6d'
                    }
                },
                splitLine: {
                    distance: -30,
                    length: 14,
                    lineStyle: {
                        width: 3,
                        color: '#4a1a6d'
                    }
                },
                axisLabel: {
                    color: '#ffffff',
                    distance: -20,
                    fontSize: 12
                },
                anchor: {
                    show: false
                },
                title: {
                    show: false
                },
                detail: {
                    valueAnimation: true,
                    width: '60%',
                    lineHeight: 40,
                    borderRadius: 8,
                    offsetCenter: [0, '-15%'],
                    fontSize: 24,
                    fontWeight: 'bold',
                    formatter: '{value}',
                    color: '#ffffff'
                },
                data: [{
                    value: 75,
                    name: 'Diversity Score'
                }]
            }]
        };
        
        chart.setOption(option);
        
        // Animate the score
        setTimeout(() => {
            chart.setOption({
                series: [{
                    data: [{
                        value: 85,
                        name: 'Diversity Score'
                    }]
                }]
            });
        }, 2000);
        
        // Resize handler
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }
}

// General animations
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutQuad',
                    delay: anime.stagger(100)
                });
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Button hover animations
    document.querySelectorAll('.btn-hover').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            anime({
                targets: btn,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            anime({
                targets: btn,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navigation helper functions
function navigateToPage(page) {
    // Add loading animation
    anime({
        targets: 'body',
        opacity: [1, 0.8],
        duration: 300,
        complete: () => {
            window.location.href = page;
        }
    });
}

// Login functionality
function handleLogin(provider) {
    if (provider === 'demo') {
        const username = document.getElementById('username')?.value;
        const password = document.getElementById('password')?.value;
        
        if (username === 'Arun' && password === '1234') {
            navigateToPage('user-home.html');
        } else {
            showNotification('Invalid credentials. Try: Arun / 1234', 'error');
        }
    } else if (provider === 'google') {
        showNotification('Google login would be implemented here', 'info');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
        type === 'error' ? 'bg-red-600' : 
        type === 'success' ? 'bg-green-600' : 
        'bg-blue-600'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuad',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Utility functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}