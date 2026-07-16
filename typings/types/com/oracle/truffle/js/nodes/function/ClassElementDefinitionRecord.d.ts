import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { ClassElementDefinitionRecord$Kind } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord$Kind.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClassElementDefinitionRecord extends Object {
    static createPrivateAccessor(paramkey: Object, paramgetter: Object, paramsetter: Object, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPrivateAutoAccessor(paramkey: Object, parambackingStorageKey: HiddenKey, paramvalue: Object, paramgetter: Object, paramsetter: Object, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPrivateField(paramkey: Object, paramvalue: Object, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPrivateGetter(paramkey: Object, paramgetter: Object, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPrivateMethod(paramkey: Object, paramvalue: Object, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPrivateSetter(paramkey: Object, paramsetter: Object, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPublicAccessor(paramkey: Object, paramgetter: Object, paramsetter: Object, paramanonymousFunctionDefinition: boolean, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPublicAutoAccessor(paramkey: Object, parambackingStorageKey: HiddenKey, paramvalue: Object, paramgetter: Object, paramsetter: Object, paramanonymousFunctionDefinition: boolean, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPublicField(paramkey: Object, paramvalue: Object, paramanonymousFunctionDefinition: boolean, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPublicGetter(paramkey: Object, paramgetter: Object, paramanonymousFunctionDefinition: boolean, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPublicMethod(paramkey: Object, paramvalue: Object, paramanonymousFunctionDefinition: boolean, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createPublicSetter(paramkey: Object, paramsetter: Object, paramanonymousFunctionDefinition: boolean, paramdecorators: Object[]): ClassElementDefinitionRecord;
    static createStaticBlock(paraminitializer: Object): ClassElementDefinitionRecord;
    constructor(kind: ClassElementDefinitionRecord$Kind, key: Object, value: Object, getter: Object, setter: Object, isPrivate: boolean, anonymousFunctionDefinition: boolean, decorators: Object[])
    constructor(kind: ClassElementDefinitionRecord$Kind, key: Object, value: Object, getter: Object, setter: Object, isPrivate: boolean, anonymousFunctionDefinition: boolean, decorators: Object[], backingStorageKey: HiddenKey)
    // private anonymousFunctionDefinition: boolean;
    readonly backingStorageKey: HiddenKey;
    readonly decorators: Object[];
    readonly getter: Object;
    readonly initializers: Object[];
    readonly initializersCount: number;
    // private isPrivate: boolean;
    readonly key: Object;
    readonly kind: ClassElementDefinitionRecord$Kind;
    readonly setter: Object;
    readonly value: Object;
    addInitializer(initializer: Object): void;
    cleanDecorator(): void;
    getBackingStorageKey(): HiddenKey;
    getDecorators(): Object[];
    getGetter(): Object;
    getInitializers(): Object[];
    getInitializersCount(): number;
    getKey(): Object;
    getKind(): ClassElementDefinitionRecord$Kind;
    getSetter(): Object;
    getValue(): Object;
    hasDecorators(): boolean;
    isAccessor(): boolean;
    isAnonymousFunction(): boolean;
    isAutoAccessor(): boolean;
    isField(): boolean;
    isGetter(): boolean;
    isMethod(): boolean;
    isPrivate(): boolean;
    isSetter(): boolean;
    isStaticBlock(): boolean;
    setGetter(newGetter: Object): void;
    setSetter(newSetter: Object): void;
    setValue(newValue: Object): void;
    toString(): string;
}