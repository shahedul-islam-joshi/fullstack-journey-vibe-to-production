import { createFileRoute } from '@tanstack/react-router';
import { PlayGround } from '../features/playground/components/playground';

export const Route = createFileRoute('/components-playground')({
    component: PlayGround,
})


