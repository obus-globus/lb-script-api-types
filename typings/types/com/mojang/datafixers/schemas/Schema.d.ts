import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { DSL$TypeReference } from '../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { TaggedChoice$TaggedChoiceType } from '../../../../com/mojang/datafixers/types/templates/TaggedChoice$TaggedChoiceType.d.ts'
import type { TypeTemplate } from '../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Schema extends Object {
    constructor(arg0: number, arg1: Schema)
    // private name: string;
    readonly parent: Schema;
    // private recursiveTypes: JavaMap<any, any>;
    // private typeTemplates: JavaMap<string, () => TypeTemplate>;
    // private types: JavaMap<string, Type<Object>>;
    readonly versionKey: number;
    buildTypes(): JavaMap<string, Type<Object>>;
    findChoiceType(arg0: DSL$TypeReference): TaggedChoice$TaggedChoiceType<Object>;
    getChoiceType(arg0: DSL$TypeReference, arg1: string): Type<Object>;
    getParent(): Schema;
    getTemplate(arg0: string): TypeTemplate;
    getType(arg0: DSL$TypeReference): Type<Object>;
    getTypeRaw(arg0: DSL$TypeReference): Type<Object>;
    getVersionKey(): number;
    id(arg0: string): TypeTemplate;
    register(arg0: JavaMap<string, () => TypeTemplate>, arg1: string, arg2: (param0: string) => TypeTemplate): void;
    register(arg0: JavaMap<string, () => TypeTemplate>, arg1: string, arg2: () => TypeTemplate): void;
    registerBlockEntities(arg0: Schema): JavaMap<string, () => TypeTemplate>;
    registerEntities(arg0: Schema): JavaMap<string, () => TypeTemplate>;
    registerSimple(arg0: JavaMap<string, () => TypeTemplate>, arg1: string): void;
    registerType(arg0: boolean, arg1: DSL$TypeReference, arg2: () => TypeTemplate): void;
    registerTypes(arg0: Schema, arg1: JavaMap<string, () => TypeTemplate>, arg2: JavaMap<string, () => TypeTemplate>): void;
    resolveTemplate(arg0: string): TypeTemplate;
    types(): string[];
}