import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { EntityReplacement$ComponentType } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/EntityReplacement$ComponentType.d.ts'
import type { EntityReplacement$EntityDataCreator } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/EntityReplacement$EntityDataCreator.d.ts'
import type { WrappedEntityData } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/WrappedEntityData.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityReplacement extends Object {
    constructor(arg0: BackwardsProtocol<any, any, any, any>, arg1: EntityType, arg2: number)
    constructor(arg0: BackwardsProtocol<any, any, any, any>, arg1: string, arg2: number, arg3: number)
    // private componentType: EntityReplacement$ComponentType;
    // private defaultData: (param0: WrappedEntityData) => void;
    // private fallbackName: string;
    // private id: number;
    // private key: string;
    // private protocol: BackwardsProtocol<any, any, any, any>;
    // private replacementId: number;
    // private translateKey: string;
    defaultData(): (param0: WrappedEntityData) => void;
    entityName(): Object;
    hasBaseData(): boolean;
    isObjectType(): boolean;
    jsonName(): EntityReplacement;
    objectData(): number;
    plainName(): EntityReplacement;
    replacementId(): number;
    spawnEntityData(arg0: (param0: WrappedEntityData) => void): EntityReplacement;
    tagName(): EntityReplacement;
    toString(): string;
    typeId(): number;
}