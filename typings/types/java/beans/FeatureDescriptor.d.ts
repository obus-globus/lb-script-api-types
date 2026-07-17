import type { JavaMap } from '../../JavaMap.d.ts'
import type { Transient } from '../../java/beans/Transient.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Reference } from '../../java/lang/ref/Reference.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FeatureDescriptor extends Object {
    constructor()
    constructor(arg0: FeatureDescriptor)
    constructor(arg0: FeatureDescriptor, arg1: FeatureDescriptor)
    // private classRef: Reference<Class<Object>>;
    readonly displayName: string;
    readonly expert: boolean;
    readonly hidden: boolean;
    readonly name: string;
    readonly preferred: boolean;
    readonly shortDescription: string;
    // private table: JavaMap<string, Object>;
    // private addTable(arg0: JavaMap<string, Object>): void;
    appendTo(arg0: StringBuilder): void;
    attributeNames(): Enumeration<string>;
    getClass0(): Class<Object>;
    getDisplayName(): string;
    getName(): string;
    getShortDescription(): string;
    // private getTable(): JavaMap<string, Object>;
    getValue(arg0: string): Object;
    isExpert(): boolean;
    isHidden(): boolean;
    isPreferred(): boolean;
    isTransient(): boolean;
    setClass0(arg0: Class<Object>): void;
    setDisplayName(arg0: string): void;
    setExpert(arg0: boolean): void;
    setHidden(arg0: boolean): void;
    setName(arg0: string): void;
    setPreferred(arg0: boolean): void;
    setShortDescription(arg0: string): void;
    setTransient(arg0: Transient): void;
    setValue(arg0: string, arg1: Object): void;
    toString(): string;
}