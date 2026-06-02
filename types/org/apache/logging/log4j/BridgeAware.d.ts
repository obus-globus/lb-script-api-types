import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BridgeAware extends Object{
    setEntryPoint(fqcn: string): void;
}