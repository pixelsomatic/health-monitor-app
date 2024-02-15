export type HealthData = {
  bloodPressure?: string;
  heartRate?: string;
  bloodGlucose?: string;
  weight?: string;
}

export type Message = {
  role: 'user' | 'system' | 'assistant';
  content: string;
};