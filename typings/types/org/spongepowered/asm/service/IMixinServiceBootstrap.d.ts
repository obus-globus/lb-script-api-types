import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IMixinServiceBootstrap extends Object{
    bootstrap(): void;
    getName(): string;
    getServiceClassName(): string;
}