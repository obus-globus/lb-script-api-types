import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
export class KmPropertyAccessorAttributes extends Object {
    constructor()
    constructor(arg0: number)
    readonly annotations: KmAnnotation[];
    // private flags: number;
    getAnnotations(): KmAnnotation[];
    getFlags$kotlin_metadata(): number;
    setFlags$kotlin_metadata(arg0: number): void;
}