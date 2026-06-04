import type { Dimension2D } from '../../java/awt/geom/Dimension2D.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Dimension extends Dimension2D implements Serializable {
    constructor()
    constructor(arg0: Dimension)
    constructor(arg0: number, arg1: number)
    height: number;
    width: number;
    equals(arg0: Object | null): boolean;
    getHeight(): number;
    getSize(): Dimension;
    getWidth(): number;
    hashCode(): number;
    setSize(arg0: Dimension): void;
    setSize(arg0: Dimension2D): void;
    setSize(arg0: number, arg1: number): void;
    toString(): string;
}