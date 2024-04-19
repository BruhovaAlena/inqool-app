import React from "react";
import Badge from "../shared/Badge";
import { UserGender } from "@/requests/users/UsersRequests.types";

type UserGenderBadgeProps = {
  genderType: UserGender;
};

const getBadgeStyles = (type: UserGender) => {
  if (type === UserGender.FEMALE) {
    return "border-red-500 text-red-500";
  }
  if (type === UserGender.MALE) {
    return "border-emerald-500 text-emerald-500";
  }
  return "border-purple-500 text-purple-500";
};

const UserGenderBadge = ({ genderType }: UserGenderBadgeProps) => {
  return <Badge value={genderType} className={getBadgeStyles(genderType)} />;
};

export default UserGenderBadge;
