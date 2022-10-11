import { getRoutes } from '@/utils/router';

export default getRoutes(import.meta.glob('./*.ts', { eager: true }), './index.ts');
