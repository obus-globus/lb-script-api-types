import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StaticShape$StorageStrategy extends Enum<StaticShape$StorageStrategy> {
    static ARRAY_BASED: StaticShape$StorageStrategy;
    static FIELD_BASED: StaticShape$StorageStrategy;
    static POD_BASED: StaticShape$StorageStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StaticShape$StorageStrategy;
    static values(): StaticShape$StorageStrategy[];
    private constructor()
    name(): "ARRAY_BASED" | "FIELD_BASED" | "POD_BASED";
}