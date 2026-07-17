import type { Introspection$SpecializationInfo } from '../../../../../com/oracle/truffle/api/dsl/Introspection$SpecializationInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Introspection extends Object {
    static getSpecialization(paraminlineParent: Node, paramnode: Node, parammethodName: string): Introspection$SpecializationInfo;
    static getSpecialization(parambytecodeNode: Node, parambytecodeIndex: number, paramnode: Node, parammethodName: string): Introspection$SpecializationInfo;
    static getSpecialization(paramnode: Node, parammethodName: string): Introspection$SpecializationInfo;
    static getSpecializations(paramnode: Node): Introspection$SpecializationInfo[];
    static getSpecializations(paraminlineParent: Node, paramnode: Node): Introspection$SpecializationInfo[];
    static getSpecializations(parambytecodeNode: Node, parambytecodeIndex: number, paramnode: Node): Introspection$SpecializationInfo[];
    static isIntrospectable(paramnode: Node): boolean;
    constructor(data: Object[])
    // private data: Object[];
    // private checkVersion(): void;
    getSpecialization(methodName: string): Introspection$SpecializationInfo;
    getSpecializations(): Introspection$SpecializationInfo[];
}