import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MinecraftClientException$ErrorType extends Enum<MinecraftClientException$ErrorType> {
    static HTTP_ERROR: MinecraftClientException$ErrorType;
    static JSON_ERROR: MinecraftClientException$ErrorType;
    static SERVICE_UNAVAILABLE: MinecraftClientException$ErrorType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MinecraftClientException$ErrorType;
    static values(): MinecraftClientException$ErrorType[];
    private constructor()
    name(): "SERVICE_UNAVAILABLE" | "HTTP_ERROR" | "JSON_ERROR";
}