import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ContainerEnumName } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ContainerEnumName.d.ts'
export class FullContainerName extends Record {
    static EMPTY: FullContainerName;
    constructor(name: ContainerEnumName, dynamicId: number)
    // private dynamicId: number;
    // private name: ContainerEnumName;
    dynamicId(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): ContainerEnumName;
    toString(): string;
}