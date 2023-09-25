interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Employer'],
  customerRoles: ['Guest'],
  tenantRoles: ['Job Seeker', 'Employer', 'Recruiter', 'HR Manager', 'Administrator', 'Super Recruiter', 'Vendor'],
  tenantName: 'Company',
  applicationName: 'Jobboard',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View user information', 'View company information'],
  ownerAbilities: [
    'Manage user data',
    'Manage company data',
    'Edit personal information',
    'Create and update company information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/cbe7060e-9ff9-4b54-a041-b937a402eed6',
};
