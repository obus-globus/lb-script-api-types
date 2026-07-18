import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigMergeable extends Object{
    withFallback(arg0: ConfigMergeable): ConfigMergeable;
}