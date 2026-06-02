import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface EffectEventContext extends Object{
    commandName(): string;
    isFromCommand(): boolean;
}