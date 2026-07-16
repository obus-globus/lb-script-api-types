import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { IrisLogging } from '../../../net/irisshaders/iris/IrisLogging.d.ts'
import type { UpdateChecker } from '../../../net/irisshaders/iris/UpdateChecker.d.ts'
import type { IrisConfig } from '../../../net/irisshaders/iris/config/IrisConfig.d.ts'
import type { PipelineManager } from '../../../net/irisshaders/iris/pipeline/PipelineManager.d.ts'
import type { ShaderPack } from '../../../net/irisshaders/iris/shaderpack/ShaderPack.d.ts'
import type { ShaderpackDirectoryManager } from '../../../net/irisshaders/iris/shaderpack/discovery/ShaderpackDirectoryManager.d.ts'
import type { NamespacedId } from '../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
import type { Profile } from '../../../net/irisshaders/iris/shaderpack/option/Profile.d.ts'
import type { Minecraft } from '../../../net/minecraft/client/Minecraft.d.ts'
import type { KeyEvent } from '../../../net/minecraft/client/input/KeyEvent.d.ts'
export class Iris extends Object {
    static IS_FOOL: boolean;
    static MODID: string;
    static MODNAME: string;
    static lastDimension: NamespacedId;
    static logger: IrisLogging;
    static testing: boolean;
    static clearShaderPackOptionQueue(): void;
    static duringRenderSystemInit(): void;
    static getCurrentDimension(): NamespacedId;
    static getCurrentPack(): Optional<ShaderPack>;
    static getCurrentPackName(): string;
    static getFormattedVersion(): string;
    static getIrisConfig(): IrisConfig;
    static getPipelineManager(): PipelineManager;
    static getReleaseTarget(): string;
    static getShaderPackOptionQueue(): { [key: string]: string };
    static getShaderpacksDirectory(): Path;
    static getShaderpacksDirectoryManager(): ShaderpackDirectoryManager;
    static getStoredError(): Optional<Exception>;
    static getUpdateChecker(): UpdateChecker;
    static getVersion(): string;
    static getVersionSimple(): string;
    static handleDebugKeys(paramarg0: KeyEvent): void;
    static handleKeybinds(paramarg0: Minecraft): void;
    static isFallback(): boolean;
    static isPackInUseQuick(): boolean;
    static isValidShaderpack(paramarg0: Path): boolean;
    static isValidToShowPack(paramarg0: Path): boolean;
    static loadShaderpack(): void;
    static loadShaderpackWhenPossible(): void;
    static loadedIncompatiblePack(): boolean;
    static onLoadingComplete(): void;
    static onRenderSystemInit(): void;
    static queueDefaultShaderPackOptionValues(): void;
    static queueShaderPackOptionsFromProfile(paramarg0: Profile): void;
    static queueShaderPackOptionsFromProperties(paramarg0: { [key: string]: any }): void;
    static reload(): void;
    static resetShaderPackOptionsOnNextReload(): void;
    static setDebug(paramarg0: boolean): void;
    static shouldActivateWireframe(): boolean;
    static shouldResetShaderPackOptionsOnNextReload(): boolean;
    static toggleShaders(paramarg0: Minecraft, paramarg1: boolean): void;
    constructor()
    onEarlyInitialize(): void;
}