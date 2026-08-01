import type { Model } from '../../../../../ai/djl/Model.d.ts'
import type { Predictor } from '../../../../../ai/djl/inference/Predictor.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../kotlin/Lazy.d.ts'
import type { Mode } from '../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export abstract class ModelWrapper<I extends unknown, O extends unknown> extends Mode implements Closeable {
    static Companion: Tagged$Companion;
    constructor(name: string, translator: Translator<I, O>, outputs: number, parent: ModeValueGroup<any>)
    // private closed: boolean;
    // private lazyModel: Lazy<Model>;
    // private lazyPredictor: Lazy<Predictor<I, O>>;
    // private lock: ReentrantReadWriteLock;
    // private /*not mapped: */ getModel(): Model;
    readonly outputs: number;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private /*not mapped: */ getPredictor(): Predictor<I, O>;
    readonly translator: Translator<I, O>;
    close(): void;
    delete(): void;
    load(stream: InputStream): void;
    load(path: Path): void;
    load(name: string): void;
    predict(input: I): O;
    save(path: Path): void;
    save(name: string): void;
    train(features: number[], labels: number[]): void;
}