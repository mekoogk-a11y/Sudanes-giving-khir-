export type Language = 'ar' | 'en';

export interface NavLinkItem {
  id: string;
  labelAr: string;
  labelEn: string;
  href: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface TrustPillar {
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface AppScreenMock {
  title: string;
  badge: string;
  subtitle: string;
  contentSnippet: string;
  statusText: string;
  statusColor: string;
}
