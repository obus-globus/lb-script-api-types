import type { Appendable } from '../../../../../../../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../../../../../../../java/lang/Object.d.ts'
export interface Escaper extends Object{
    escape(arg0: Appendable): Appendable;
    escape(arg0: string): string;
}