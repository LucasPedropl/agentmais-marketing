import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string[];
  icon: LucideIcon;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  clientImpact: string;
  companyImpact: string;
}

export interface StepItem {
  title: string;
  description: string;
  icon: LucideIcon;
}