import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// ── SVG Icons ──────────────────────────────────────────────────────────────

const IconInference = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const IconTraining = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>
);

const IconBlueprint = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18M9 21V9"/>
  </svg>
);

const IconObservability = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const IconOpenSource = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
);

const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

// ── Feature Cards Data ─────────────────────────────────────────────────────

const features = [
  {
    Icon: IconInference,
    title: 'LLM Inference',
    desc: '使用 vLLM 在 CCE GPU 节点上部署大语言模型，支持张量并行、连续批处理和 OpenAI 兼容 API。',
    link: '/docs/inference/vllm-deployment-guide',
    accent: '#00C6FF',
  },
  {
    Icon: IconTraining,
    title: '分布式训练',
    desc: '基于 KubeRay 和 PyTorch DDP/FSDP 进行多节点分布式模型训练，充分利用 GPU 互联带宽。',
    link: '/docs/training/distributed-training-kuberay',
    accent: '#6366F1',
  },
  {
    Icon: IconBlueprint,
    title: 'Ready-to-use Blueprints',
    desc: '经过验证的一键部署模板，覆盖推理、训练、微调等主流 AI 场景，开箱即用。',
    link: '/docs/getting-started/quick-start',
    accent: '#00D17A',
  },
  {
    Icon: IconObservability,
    title: '可观测性',
    desc: '内置 Prometheus、Grafana 监控堆栈，可视化 GPU 利用率、吞吐量与延迟指标。',
    link: '/docs/getting-started/quick-start',
    accent: '#F59E0B',
  },
  {
    Icon: IconCloud,
    title: '华为云原生',
    desc: '深度集成 CCE、SFS Turbo、VPC 等华为云服务，自动扩缩容，降低运维复杂度。',
    link: '/docs/getting-started/quick-start',
    accent: '#EF4444',
  },
  {
    Icon: IconOpenSource,
    title: '开源社区',
    desc: '完全开源，欢迎贡献蓝图、修复问题或分享实践经验。一起构建 AI 基础设施标准。',
    link: 'https://github.com/VanderChen/ai-on-cce',
    accent: '#8B5CF6',
  },
];

// ── Quick Start Steps ──────────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    title: '克隆仓库',
    desc: '获取最新的蓝图和配置模板，确保你已配置好 kubectl 和华为云 CCE 访问权限。',
    code: 'git clone https://github.com/your-github-org/ai-on-cce',
  },
  {
    num: '02',
    title: '选择蓝图',
    desc: '根据你的场景（推理 / 训练 / 微调）选择对应的蓝图目录，按需修改参数。',
    code: 'cd ai-on-cce/blueprints/inference\nls -la',
  },
  {
    num: '03',
    title: '一键部署',
    desc: '将蓝图应用到 CCE 集群，几分钟内完成 AI 工作负载的端到端部署。',
    code: 'kubectl apply -f vllm-llama3.yaml',
  },
];

// ── Tech Stack ─────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Huawei CCE', label: 'CCE',     note: '【Logo：Huawei Cloud CCE 官方图标】' },
  { name: 'vLLM',       label: 'vLLM', note: '【Logo：vLLM 项目 Logo】' },
  { name: 'KubeRay',    label: 'Ray', note: '【Logo：Ray/Anyscale Logo】' },
  { name: 'PyTorch',    label: 'PyTorch', note: '【Logo：PyTorch 火焰 Logo】' },
  { name: 'Prometheus', label: 'Prom', note: '【Logo：Prometheus Logo】' },
  { name: 'Grafana',    label: 'Grafana', note: '【Logo：Grafana Logo】' },
  { name: 'Kubernetes', label: 'K8s', note: '【Logo：Kubernetes 舵轮 Logo】' },
];

// ── Sections ───────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      {/* Background orbs */}
      <div className={clsx(styles.bgOrb, styles.bgOrb1)} />
      <div className={clsx(styles.bgOrb, styles.bgOrb2)} />
      <div className={clsx(styles.bgOrb, styles.bgOrb3)} />

      <div className={styles.heroContainer}>
        {/* Badge */}
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          华为云 · Cloud Container Engine
        </div>

        {/* Title */}
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleGradient}>AI on </span>
          <span className={styles.heroTitleHighlight}>CCE</span>
        </h1>

        {/* Tagline */}
        <p className={styles.heroTagline}>
          在华为云 Cloud Container Engine 上构建、部署和扩展 AI 基础设施。
          生产级蓝图，开箱即用。
        </p>

        {/* CTA Buttons */}
        <div className={styles.heroCta}>
          <Link className={styles.ctaPrimary} to="/docs/getting-started/quick-start">
            快速开始
            <IconArrow />
          </Link>
          <Link className={styles.ctaSecondary} to="https://github.com/VanderChen/ai-on-cce">
            <IconGitHub />
            GitHub
          </Link>
        </div>

        {/* Stats */}
        <div className={styles.heroStats}>
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNumber}>10+</span>
            <span className={styles.heroStatLabel}>Blueprints</span>
          </div>
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNumber}>3</span>
            <span className={styles.heroStatLabel}>AI 场景</span>
          </div>
          <div className={styles.heroStatItem}>
            <span className={styles.heroStatNumber}>100%</span>
            <span className={styles.heroStatLabel}>开源</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArchitectureSection() {
  return (
    <section className={styles.architectureSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Platform Overview</span>
          <h2 className={styles.sectionTitle}>平台整体架构</h2>
          <p className={styles.sectionSubtitle}>
            从模型训练到推理服务，AI on CCE 提供端到端的 AI 基础设施蓝图，
            覆盖数据管理、训练加速、推理部署与全链路可观测性。
          </p>
        </div>

        {/* Architecture diagram placeholder */}
        <div className={styles.imagePlaceholder}>
          <div className={styles.imagePlaceholderInner}>
            <IconCamera className={styles.placeholderIcon} />
            <p className={styles.placeholderTitle}>平台架构图</p>
            <p className={styles.placeholderDesc}>
              【待补充图片】建议尺寸：1200×600px，PNG/SVG 格式。<br/>
              内容：展示从华为云 CCE 集群 → GPU 节点池 → AI 工作负载（vLLM / KubeRay）→ 存储（SFS Turbo / OBS）→
              监控（Prometheus / Grafana）的完整端到端架构图，包含组件依赖与数据流向。
            </p>
            <span className={styles.placeholderTag}>// img/architecture-overview.svg</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Core Capabilities</span>
          <h2 className={styles.sectionTitle}>核心能力</h2>
          <p className={styles.sectionSubtitle}>
            覆盖 AI 全生命周期的基础设施能力，从大规模训练到高并发推理服务。
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <Link
              key={i}
              className={styles.featureCard}
              to={f.link}
              style={{ '--card-accent': f.accent } as React.CSSProperties}
            >
              <div
                className={styles.featureIconWrap}
                style={{
                  background: `rgba(${hexToRgb(f.accent)}, 0.1)`,
                  borderColor: `rgba(${hexToRgb(f.accent)}, 0.25)`,
                  color: f.accent,
                }}
              >
                <f.Icon />
              </div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
              <span className={styles.featureLink} style={{ color: f.accent }}>
                了解更多 <IconArrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStartSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Quick Start</span>
          <h2 className={styles.sectionTitle}>三步开始使用</h2>
          <p className={styles.sectionSubtitle}>
            无需复杂配置，几分钟内将 AI 工作负载运行在华为云 CCE 上。
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((s, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepNumber}>{s.num}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              <code className={styles.stepCode}>{s.code}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className={styles.techStackSection}>
      <div className="container">
        <p className={styles.techStackLabel}>构建于业界领先的开源技术之上</p>
        <div className={styles.techLogoGrid}>
          {techStack.map((t, i) => (
            <div key={i} className={styles.techLogoCard} title={t.note}>
              {/*
                【待补充图片】{t.note}
                替换下方 div 为：
                <img src={`/img/logos/${t.name.toLowerCase()}.svg`} alt={t.name} className={styles.techLogoImg} />
              */}
              <div className={styles.techLogoPlaceholder}>{t.label}</div>
              <span className={styles.techLogoName}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Showcase / Demo Section ────────────────────────────────────────────────

function ShowcaseSection() {
  return (
    <section style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #040F1E 0%, #020A14 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left: Text */}
          <div>
            <span className={styles.sectionEyebrow}>Inference Blueprint</span>
            <h2 className={styles.sectionTitle} style={{ marginTop: '0.75rem' }}>
              vLLM on CCE GPU 节点
            </h2>
            <p style={{ color: 'rgba(186,230,253,0.65)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              借助 vLLM 的 PagedAttention 和连续批处理技术，在 CCE GPU 节点上以最高吞吐量
              服务 LLaMA、Qwen、Mistral 等主流开源模型，并通过 OpenAI 兼容 API 对外暴露。
            </p>
            <ul style={{ color: 'rgba(186,230,253,0.6)', fontSize: '0.875rem', lineHeight: 2, paddingLeft: '1.25rem', margin: 0 }}>
              <li>支持 FP16 / BF16 / INT8 量化</li>
              <li>张量并行 + 流水线并行</li>
              <li>OpenAI Compatible API</li>
              <li>Prometheus 指标接入</li>
            </ul>
            <div style={{ marginTop: '1.75rem' }}>
              <Link className={styles.ctaPrimary} to="/docs/inference/vllm-deployment-guide">
                查看部署指南 <IconArrow />
              </Link>
            </div>
          </div>

          {/* Right: Image placeholder */}
          <div className={styles.imagePlaceholder} style={{ minHeight: '300px' }}>
            <div className={styles.imagePlaceholderInner}>
              <IconCamera className={styles.placeholderIcon} />
              <p className={styles.placeholderTitle}>vLLM 推理架构示意图</p>
              <p className={styles.placeholderDesc}>
                【待补充图片】建议尺寸：700×420px<br/>
                内容：展示请求从客户端 → Ingress → vLLM Pod → GPU 显存（PagedAttention KV Cache）
                的数据流，以及 GPU 节点池的横向扩展示意。
              </p>
              <span className={styles.placeholderTag}>// img/vllm-architecture.png</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Utility ────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 198, 255';
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="AI on CCE — AI Infrastructure Blueprints for Huawei Cloud"
      description="Blueprints for deploying AI workloads on Huawei Cloud Container Engine (CCE). vLLM, KubeRay, distributed training, and more.">
      <HeroSection />
      <main>
        <ArchitectureSection />
        <FeaturesSection />
        <ShowcaseSection />
        <QuickStartSection />
        <TechStackSection />
      </main>
    </Layout>
  );
}
