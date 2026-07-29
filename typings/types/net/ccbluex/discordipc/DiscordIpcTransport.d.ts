import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DiscordIpcFrame } from '../../../net/ccbluex/discordipc/DiscordIpcFrame.d.ts'
export interface DiscordIpcTransport extends Closeable, Object{
    /*not mapped: */ isOpen(): boolean;
    close(): void;
    read(): DiscordIpcFrame;
    write(frame: DiscordIpcFrame): void;
}