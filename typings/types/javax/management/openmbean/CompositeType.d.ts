import type { JavaMap } from '../../../JavaMap.d.ts'
import type { CompositeData } from '../../../javax/management/openmbean/CompositeData.d.ts'
import type { OpenType } from '../../../javax/management/openmbean/OpenType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CompositeType extends OpenType<CompositeData> {
    static ALLOWED_CLASSNAMES: string[];
    static ALLOWED_CLASSNAMES_LIST: string[];
    constructor(arg0: string, arg1: string, arg2: string[], arg3: string[], arg4: OpenType<Object>[])
    // private myHashCode: number;
    // private myNamesSet: string[];
    // private myToString: string;
    // private nameToDescription: JavaMap<string, string>;
    // private nameToType: JavaMap<string, OpenType<Object>>;
    containsKey(arg0: string): boolean;
    equals(arg0: Object | null): boolean;
    getDescription(): string;
    getDescription(arg0: string): string;
    getType(arg0: string): OpenType<Object>;
    hashCode(): number;
    isAssignableFrom(arg0: OpenType<Object>): boolean;
    isValue(arg0: Object): boolean;
    keySet(): string[];
    toString(): string;
}