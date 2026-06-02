import type { Object } from '../java/lang/Object.d.ts'
import type { Call } from '../okhttp3/Call.d.ts'
import type { EventListener } from '../okhttp3/EventListener.d.ts'
export interface EventListener$Factory extends Object{
    create(call: Call): EventListener;
}