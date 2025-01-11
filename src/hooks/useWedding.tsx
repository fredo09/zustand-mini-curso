import { useWeddingBoundStore } from "../store/wedding";

export const useWedding = () => {
  const firstName = useWeddingBoundStore((state) => state.firstName);
  const lastName = useWeddingBoundStore((state) => state.lastName);
  const countGuest = useWeddingBoundStore((state) => state.guestCount);
  const isConfirm = useWeddingBoundStore((state) => state.isConfirm);

  const setFirstName = useWeddingBoundStore((state) => state.setFirstName);
  const setLastName = useWeddingBoundStore((state) => state.setLastName);

  const setGuestCount = useWeddingBoundStore((state) => state.setGuestCount);

  const eventYYDDMM = useWeddingBoundStore((state) => state.eventYYMMDD());
  const eventHHMM = useWeddingBoundStore((state) => state.eventHHMM());

  const setEventDate = useWeddingBoundStore((state) => state.setEventDate);
  const setEventTime = useWeddingBoundStore((state) => state.setEventTime);

  const setConfirm = useWeddingBoundStore((state) => state.setConfirm);

  const eventDate = useWeddingBoundStore((state) => state.eventDate);

  return {
    firstName,
    lastName,
    countGuest,
    isConfirm,
    setConfirm,
    setFirstName,
    setLastName,
    setGuestCount,
    eventHHMM,
    eventYYDDMM,
    setEventDate,
    setEventTime,
    eventDate,
  };
};
