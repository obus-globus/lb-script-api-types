import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
export class FabricDataGenHelper extends Object {
    static ENABLED: boolean;
    static addConditions(paramarg0: JsonObject, ...paramarg1: ResourceCondition[]): void;
    static addConditions(paramarg0: Object, paramarg1: ResourceCondition[]): void;
    static consumeConditions(paramarg0: Object): ResourceCondition[];
    static deleteDirectory(paramarg0: Path): void;
    static run(): void;
    private constructor()
}