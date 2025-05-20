'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
      <dialog ref={dialogRef} className={"w-full h-full m-0 bg-zinc-900/90 flex items-center text-center gap-4"} onClose={onDismiss}>
        {children}
        {/*<button onClick={onDismiss} className="close-button" />*/}
      </dialog>,
    document.getElementById('modal-root')!
  );
}