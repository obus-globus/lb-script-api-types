import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FileChannel } from '../../../java/nio/channels/FileChannel.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordIpcFrame } from '../../../net/ccbluex/discordipc/DiscordIpcFrame.d.ts'
import type { DiscordIpcTransport } from '../../../net/ccbluex/discordipc/DiscordIpcTransport.d.ts'
export class WindowsDiscordIpcTransport extends Object implements DiscordIpcTransport {
    static POLL_INTERVAL_MS: number;
    constructor(path: Path)
    // private channel: FileChannel;
    // private closed: AtomicBoolean;
    /*not mapped: */ isOpen(): boolean;
    // private writeLock: ReentrantLock;
    close(): void;
    // private ensureOpen(): void;
    read(): DiscordIpcFrame;
    // private readFully(buffer: ByteBuffer): void;
    write(frame: DiscordIpcFrame): void;
}