import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ResourcePackResponse extends Enum<ResourcePackResponse> {
    static Cancel: ResourcePackResponse;
    static Downloading: ResourcePackResponse;
    static DownloadingFinished: ResourcePackResponse;
    static ResourcePackStackFinished: ResourcePackResponse;
    static getByName(paramarg0: string): ResourcePackResponse;
    static getByName(paramarg0: string, paramarg1: ResourcePackResponse): ResourcePackResponse;
    static getByValue(paramarg0: number): ResourcePackResponse;
    static getByValue(paramarg0: number, paramarg1: ResourcePackResponse): ResourcePackResponse;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ResourcePackResponse;
    static values(): ResourcePackResponse[];
    private constructor(arg2: number)
    private constructor(arg2: ResourcePackResponse)
    readonly value: number;
    getValue(): number;
    name(): "Cancel" | "Downloading" | "DownloadingFinished" | "ResourcePackStackFinished";
}