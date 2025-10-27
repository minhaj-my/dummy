"use client";

import { motion } from "framer-motion";
import { companies } from "@/mocks/companies";

export default function CompaniesList() {
  return (
    <div className="p-10">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Companies
      </motion.h1>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.7 } },
        }}
        className="space-y-2"
      >
        {companies.map((company) => (
          <motion.li
            key={company.id}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="border rounded p-3 hover:bg-gray-50 transition"
          >
            <p className="font-semibold">{company.name}</p>
            <p
              className={`text-sm${
                company.status === "active"
                  ? " text-green-600"
                  : " text-red-600"
              }`}
            >
              {" "}
              status : {company.status}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
