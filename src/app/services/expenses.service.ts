import { Injectable } from '@angular/core';
import {expensesList} from "../shared/DATA";
import {Expense} from "../shared/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  loadExpenses():Expense[]{
    return expensesList;
  }

  loadExpense(id: number):Expense{
    return expensesList[id];
  }

}
