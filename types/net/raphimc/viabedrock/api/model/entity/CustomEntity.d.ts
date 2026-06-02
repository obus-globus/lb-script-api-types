import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { CustomEntity$EvaluatedModel } from '../../../../../../net/raphimc/viabedrock/api/model/entity/CustomEntity$EvaluatedModel.d.ts'
import type { CustomEntity$ItemDisplayEntity } from '../../../../../../net/raphimc/viabedrock/api/model/entity/CustomEntity$ItemDisplayEntity.d.ts'
import type { Entity } from '../../../../../../net/raphimc/viabedrock/api/model/entity/Entity.d.ts'
import type { EntityDefinitions$EntityDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/EntityDefinitions$EntityDefinition.d.ts'
import type { Position3f } from '../../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
import type { BedrockRenderController$Array } from '../../../../../../org/cube/converter/data/bedrock/controller/BedrockRenderController$Array.d.ts'
import type { Scope } from '../../../../../../team/unnamed/mocha/runtime/Scope.d.ts'
import type { MutableObjectBinding } from '../../../../../../team/unnamed/mocha/runtime/value/MutableObjectBinding.d.ts'
export class CustomEntity extends Entity {
    constructor(arg0: UserConnection, arg1: number, arg2: number, arg3: string, arg4: number, arg5: EntityDefinitions$EntityDefinition)
    // private entityDefinition: EntityDefinitions$EntityDefinition;
    // private entityScope: Scope;
    // private inverseGeometryMap: { [key: string]: string };
    // private inverseTextureMap: { [key: string]: string };
    // private models: CustomEntity$EvaluatedModel[];
    // private partEntities: CustomEntity$ItemDisplayEntity[];
    // private spawned: boolean;
    // private despawn(): void;
    // private evaluateRenderControllerChange(): boolean;
    // private getArrayBinding(arg0: Scope, arg1: BedrockRenderController$Array[]): MutableObjectBinding;
    onEntityDataChanged(): void;
    remove(): void;
    setPosition(arg0: Position3f): void;
    setRotation(arg0: Position3f): void;
    // private spawn(): void;
}