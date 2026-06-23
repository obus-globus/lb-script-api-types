import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractOrigin } from '../../../../../org/apache/commons/io/build/AbstractOrigin.d.ts'
import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { Tailer } from '../../../../../org/apache/commons/io/input/Tailer.d.ts'
import type { Tailer$Tailable } from '../../../../../org/apache/commons/io/input/Tailer$Tailable.d.ts'
import type { TailerListener } from '../../../../../org/apache/commons/io/input/TailerListener.d.ts'
export class Tailer$Builder extends AbstractStreamBuilder<Tailer, Tailer$Builder> {
    constructor()
    // private delayDuration: Duration;
    // private executorService: ExecutorService;
    // private ignoreTouch: boolean;
    // private reOpen: boolean;
    // private startThread: boolean;
    // private tailFromEnd: boolean;
    // private tailable: Tailer$Tailable;
    // private tailerListener: TailerListener;
    get(): Tailer;
    setDelayDuration(arg0: Duration): Tailer$Builder;
    setExecutorService(arg0: ExecutorService): Tailer$Builder;
    setIgnoreTouch(arg0: boolean): Tailer$Builder;
    setOrigin(arg0: AbstractOrigin<Object, any>): Tailer$Builder;
    setReOpen(arg0: boolean): Tailer$Builder;
    setStartThread(arg0: boolean): Tailer$Builder;
    setTailFromEnd(arg0: boolean): Tailer$Builder;
    setTailable(arg0: Tailer$Tailable): Tailer$Builder;
    setTailerListener(arg0: TailerListener): Tailer$Builder;
}