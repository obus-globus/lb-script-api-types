import type { Permission } from '../../java/security/Permission.d.ts'
import type { PermissionCollection } from '../../java/security/PermissionCollection.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CryptoPermission extends Permission {
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: AlgorithmParameterSpec)
    constructor(arg0: string, arg1: number, arg2: AlgorithmParameterSpec, arg3: string)
    constructor(arg0: string, arg1: number, arg2: string)
    constructor(arg0: string, arg1: string)
    // private alg: string;
    // private algParamSpec: AlgorithmParameterSpec;
    // private checkParam: boolean;
    // private exemptionMechanism: string;
    // private maxKeySize: number;
    equals(arg0: Object | null): boolean;
    getActions(): string;
    getAlgorithm(): string;
    getAlgorithmParameterSpec(): AlgorithmParameterSpec;
    getCheckParam(): boolean;
    getExemptionMechanism(): string;
    getMaxKeySize(): number;
    hashCode(): number;
    implies(arg0: Permission): boolean;
    // private impliesExemptionMechanism(arg0: string): boolean;
    // private impliesParameterSpec(arg0: boolean, arg1: AlgorithmParameterSpec): boolean;
    newPermissionCollection(): PermissionCollection;
    toString(): string;
}