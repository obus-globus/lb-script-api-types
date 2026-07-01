import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { IoHandler } from '../../../../io/netty/channel/IoHandler.d.ts'
import type { IoHandlerContext } from '../../../../io/netty/channel/IoHandlerContext.d.ts'
import type { IoHandlerFactory } from '../../../../io/netty/channel/IoHandlerFactory.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { SelectStrategy } from '../../../../io/netty/channel/SelectStrategy.d.ts'
import type { SelectStrategyFactory } from '../../../../io/netty/channel/SelectStrategyFactory.d.ts'
import type { NioIoHandler$SelectorTuple } from '../../../../io/netty/channel/nio/NioIoHandler$SelectorTuple.d.ts'
import type { IntSupplier } from '../../../../io/netty/util/IntSupplier.d.ts'
import type { ThreadAwareExecutor } from '../../../../io/netty/util/concurrent/ThreadAwareExecutor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NioIoHandler extends Object implements IoHandler {
    static newFactory(): IoHandlerFactory;
    static newFactory(paramarg0: SelectorProvider): IoHandlerFactory;
    static newFactory(paramarg0: SelectorProvider, paramarg1: SelectStrategyFactory): IoHandlerFactory;
    constructor(arg0: ThreadAwareExecutor, arg1: SelectorProvider, arg2: SelectStrategy, arg3: IntSupplier)
    // private cancelledKeys: number;
    // private executor: ThreadAwareExecutor;
    // private needsToSelectAgain: boolean;
    // private provider: SelectorProvider;
    // private selectNowSupplier: IntSupplier;
    // private selectStrategy: SelectStrategy;
    // private selectedKeys: (Object | null)[];
    // private selector: Selector;
    // private unwrappedSelector: Selector;
    // private wakenUp: AtomicBoolean;
    destroy(): void;
    initialize(): void;
    isCompatible(arg0: Class<IoHandle>): boolean;
    numRegistered(): number;
    // private openSelector(): NioIoHandler$SelectorTuple;
    prepareToDestroy(): void;
    // private processSelectedKey(arg0: SelectionKey): void;
    // private processSelectedKeys(): number;
    // private processSelectedKeysOptimized(): number;
    // private processSelectedKeysPlain(arg0: SelectionKey[]): number;
    rebuildSelector0(): void;
    register(arg0: IoHandle): IoRegistration;
    registeredSet(): SelectionKey[];
    run(arg0: IoHandlerContext): number;
    // private select(arg0: IoHandlerContext, arg1: boolean): void;
    // private selectAgain(): void;
    selectNow(): number;
    // private selectRebuildSelector(arg0: number): Selector;
    selector(): Selector;
    selectorProvider(): SelectorProvider;
    unwrappedSelector(): Selector;
    wakeup(): void;
}