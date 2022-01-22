-- CreateTable
CREATE TABLE "_EmployeeToPosition" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EmployeeToPosition_AB_unique" ON "_EmployeeToPosition"("A", "B");

-- CreateIndex
CREATE INDEX "_EmployeeToPosition_B_index" ON "_EmployeeToPosition"("B");

-- AddForeignKey
ALTER TABLE "_EmployeeToPosition" ADD FOREIGN KEY ("A") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToPosition" ADD FOREIGN KEY ("B") REFERENCES "Position"("id") ON DELETE CASCADE ON UPDATE CASCADE;
