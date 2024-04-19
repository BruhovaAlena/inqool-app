import React from "react";
import Badge from "../shared/Badge";
import { AnimalType } from "@/requests/animals/AnimalsRequests.types";

type AnimalTypeBadgeProps = {
  animalType: AnimalType;
};

const getBadgeStyles = (type: AnimalType) => {
  if (type === AnimalType.CAT) {
    return "border-red-500 text-red-500";
  }
  if (type === AnimalType.DOG) {
    return "border-emerald-500 text-emerald-500";
  }
  return "border-purple-500 text-purple-500";
};

const AnimalTypeBadge = ({ animalType }: AnimalTypeBadgeProps) => {
  return <Badge value={animalType} className={getBadgeStyles(animalType)} />;
};

export default AnimalTypeBadge;
