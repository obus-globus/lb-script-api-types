import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConstantFieldInfo extends Object {
    static CHILD: ConstantFieldInfo;
    static CHILDREN: ConstantFieldInfo;
    static forDimensions(paramdimensions: number): ConstantFieldInfo;
    private constructor(rawValue: number)
    // private rawValue: number;
    equals(obj: Object | null): boolean;
    getDimensions(): number;
    hashCode(): number;
    isChild(): boolean;
    isChildren(): boolean;
    toString(): string;
}