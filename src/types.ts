export type TabType = 'inicio' | 'nosotros' | 'servicios' | 'portafolio' | 'contacto';

export type PortfolioCategory =
  | 'todos'
  | 'branding'
  | 'rebranding'
  | 'direccion-creativa'
  | 'identidad-visual';

export interface CaseStoryBlock {
  number?: string;
  title: string;
  paragraphs: string[];
  italicQuote?: string;
}

export interface CaseVisualBlock {
  tag: string;
  title?: string;
  image: string;
  alt: string;
  aspect?: string;
  colSpan?: string;
}

export interface CaseStudyData {
  id: string;
  caseNumber: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  heroManifesto: string;
  heroManifestoItalic?: string;
  heroDescription: string;
  meta: {
    client: string;
    discipline: string;
    year: string;
    location: string;
    specialty?: string;
  };
  themeColor: string; // e.g. '#E6E8B4', '#232323', '#E5D8C9', '#tertiary-fixed'
  themeTextColor?: string;
  gallery: CaseVisualBlock[];
  storySubtitle: string;
  storyDetails?: { label: string; value: string }[];
  stories: CaseStoryBlock[];
  nextCaseId?: string;
  nextCaseTitle?: string;
  nextCaseSubtitle?: string;
  stats?: { label: string; value: string }[];
}

export interface ProjectPreview {
  id: string;
  title: string;
  subtitle: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
  hasDetailedCase: boolean;
}

export interface ContactFormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  servicios: string[];
  pais: string;
  motivo: string;
  proyecto: string;
  redes: string;
  presupuesto: string;
  conocido: string;
}
