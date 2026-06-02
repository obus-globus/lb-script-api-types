import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TransformAttribute extends Object implements Serializable {
    static IDENTITY: TransformAttribute;
    constructor(arg0: AffineTransform)
    readonly transform: AffineTransform;
    equals(arg0: Object | null): boolean;
    getTransform(): AffineTransform;
    hashCode(): number;
    isIdentity(): boolean;
    // private readResolve(): Object;
    // private writeObject(arg0: ObjectOutputStream): void;
}